import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub240Component} from "./stub240.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub240Component
        }])
    ],
    declarations: [
        Stub240Component
    ]
})
export class Stub240Module {

}

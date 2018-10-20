import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub859Component} from "./stub859.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub859Component
        }])
    ],
    declarations: [
        Stub859Component
    ]
})
export class Stub859Module {

}

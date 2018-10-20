import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub997Component} from "./stub997.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub997Component
        }])
    ],
    declarations: [
        Stub997Component
    ]
})
export class Stub997Module {

}

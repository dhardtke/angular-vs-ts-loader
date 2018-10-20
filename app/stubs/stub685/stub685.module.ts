import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub685Component} from "./stub685.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub685Component
        }])
    ],
    declarations: [
        Stub685Component
    ]
})
export class Stub685Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub855Component} from "./stub855.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub855Component
        }])
    ],
    declarations: [
        Stub855Component
    ]
})
export class Stub855Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub337Component} from "./stub337.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub337Component
        }])
    ],
    declarations: [
        Stub337Component
    ]
})
export class Stub337Module {

}
